"use server"

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

import { HDNodeWallet } from "ethers";
import { mnemonicToSeedSync } from "bip39";

const seed = mnemonicToSeedSync(process.env.MNEMONIC!);

export async function POST(req: Request){
    try{
        const { username, password } = await req.json();

        const user = await db.user.upsert({
            where: {
              username: username,
            },
            create: {
              username: username,
              password: password,
              indexer: 0,
            },
            update: {
              username: username, 
            },
        });
        
        const indexer = user.indexer;
    
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(`m/44'/60'/${indexer}'/0`);

        console.log(user);
        console.log(child);
        

        const newKey = await db.userKeys.create({
            data:{
                publicKey: child.address,
                privateKey: child.privateKey,
                userId: user.id
            }
        })

        await db.user.update({
            where:{
                id: user.id
            },
            data:{
                indexer:{
                    increment: 1
                }
            }
        })

        return NextResponse.json(newKey);

    }catch(error){  
        console.log("[AUTH], ",error);
        return new NextResponse("Internal Error",{status:500})
        
    }
}
