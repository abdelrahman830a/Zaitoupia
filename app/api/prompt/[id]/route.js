import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

//Get request
export const GET= async (request, {params}) => {
    try {
        await connectToDB();

        const prompt= await Prompt.findById(params.id).populate('creator');
        if(!prompt) return new Response("prompt not found", {
            status: 404
        })  

        return new Response(JSON.stringify(prompt), {
            status: 200
        })
    } catch (error) {
        return new Response("failed to fetch all prompts", {
            status: 500
        })
    }
}

//Patch request
export const PATCH= async (request, {params}) => {
    const {prompt, tag}= await request.json();

    try {
        await connectToDB();

        const existingPrompt= await Prompt.findById(params.id);

        if(!existingPrompt) return new Response("prompt not found", {
            status: 404
        })

        existingPrompt.prompt= prompt;
        existingPrompt.tag= tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), {
            status: 200
        })
    } catch (error) {
        return new Response("failed to update prompt", {
            status: 500
        })
        
    }
}

//Delete request
export const DELETE= async (request, {params}) =>{
    try {
        await connectToDB();

        await Prompt.findByIdAndDelete(params.id);
        return new Response("prompt deleted successfully", {
            status: 200
        })
    } catch (error) {
        return new Response("failed to delete prompt", {
            status: 500
        })
    }
}