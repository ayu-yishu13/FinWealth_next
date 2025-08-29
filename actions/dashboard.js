"use server";

import { auth } from "@clerk/nextjs/server";

export async function createAccount(data) {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized");

        
    } catch (error) {}
    
}