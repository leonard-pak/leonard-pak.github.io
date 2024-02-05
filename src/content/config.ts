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

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

const socialSchema = z.object({
    name: z.string(),
    url: z.string(),
    icon: z.union([
        z.literal('github-logo'),
        z.literal('telegram-logo'),
        z.literal('twitter-logo'),
        z.literal('linkedin-logo'),
        z.literal('leetcode-logo'),
        z.literal('envelope'),
        z.literal('rss-simple'),
    ]),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type SocialSchema = z.infer<typeof socialSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const socialCollection = defineCollection({
    type: "data",
    schema: socialSchema
});

export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'social': socialCollection
};
