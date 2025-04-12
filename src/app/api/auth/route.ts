"use server"

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

import { HDNodeWallet, Wallet, Mnemonic } from "ethers";

export async function POST(){
    try{
        const mnemonic = Mnemonic.fromPhrase("virus sleep example price fold excuse hat any cement clutch autumn strong");
        const keyPair1 = HDNodeWallet.fromMnemonic(mnemonic).publicKey;
        const keyPair2 = HDNodeWallet.fromMnemonic(mnemonic).publicKey;
        const keyPair3 = HDNodeWallet.fromMnemonic(mnemonic).publicKey;
        const keyPair4 = HDNodeWallet.fromMnemonic(mnemonic).publicKey;
        const keyPair5 = HDNodeWallet.fromMnemonic(mnemonic).publicKey;
        const keyPair6 = HDNodeWallet.fromMnemonic(mnemonic).publicKey;
        const keyPair7 = HDNodeWallet.fromMnemonic(mnemonic).publicKey;
        const keyPair8 = HDNodeWallet.fromMnemonic(mnemonic).publicKey;

        // console.log(keyPair);
        
        return NextResponse.json({data: [keyPair1, keyPair2, keyPair3, keyPair4, keyPair5, keyPair6, keyPair7, keyPair8]});

    }catch(error){  
        console.log("[AUTH], ",error);
        return new NextResponse("Internal Error",{status:500})
        
    }
}
