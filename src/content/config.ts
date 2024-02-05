import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});


const socialSchema = z.object({
    name: z.string(),
    url: z.string(),
    icon: z.union([
        z.literal('github-logo'),
        z.literal('twitter-logo'),
        z.literal('linkedin-logo'),
        z.literal('leetcode-logo'),
        z.literal('rss-simple'),
        z.literal('telegram-logo'),
        z.literal('envelope'),
    ]),
});

const contactSchema = z.object({
    name: z.string(),
    url: z.string(),
    icon: z.union([
        z.literal('telegram-logo'),
        z.literal('envelope'),
    ]),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type SocialSchema = z.infer<typeof socialSchema>;
export type ContactSchema = z.infer<typeof contactSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const socialCollection = defineCollection({
    type: "data",
    schema: socialSchema
});
const contactCollection = defineCollection({
    type: "data",
    schema: contactSchema
});

export const collections = {
    'blog': blogCollection,
    'socials': socialCollection,
    'contacts': contactCollection
};
