import z from "zod"

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string().optional(),
});

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const createPostInput = z.object({
    title: z.string(),
    content: z.string(),
});

export const updatePostInput = z.object({
    title: z.string(),
    content: z.string(),

});

export type signupType = z.infer<typeof signupInput>;
export type signinType = z.infer<typeof signinInput>;
export type createPostType = z.infer<typeof createPostInput>;
export type updatePostType = z.infer<typeof updatePostInput>;