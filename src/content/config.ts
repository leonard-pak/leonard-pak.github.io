import { defineCollection, z } from "astro:content";

const icons = z.union([
    z.literal('github-logo'),
    z.literal('twitter-logo'),
    z.literal('linkedin-logo'),
    z.literal('leetcode-logo'),
    z.literal('rss-simple'),
    z.literal('telegram-logo'),
    z.literal('envelope'),
]);

const projectSchema = z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    publication_links: z.array(z.object({
        name: z.string(),
        url: z.string().url(),
        icon: icons,
    })).optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});


const socialSchema = z.object({
    name: z.string(),
    url: z.string(),
    icon: icons,
});

const contactSchema = z.object({
    name: z.string(),
    url: z.string(),
    icon: z.union([
        z.literal('telegram-logo'),
        z.literal('envelope'),
    ]),
});

const cvScheme = z.object({
    title: z.string(),
    description: z.string(),
    education: z.object({
        title: z.string(),
        steps: z.array(z.object({
            name: z.string(),
            period: z.string()
        }))
    }),
    experience: z.object({
        title: z.string(),
        stage: z.array(z.object({
            title: z.string(),
            position: z.string(),
            period: z.string(),
            description: z.string()
        }))
    }),
    courses: z.object({
        title: z.string(),
        items: z.array(z.object({
            name: z.string(),
            url: z.string().url()
        }))
    }),
    skills: z.object({
        title: z.string(),
        items: z.array(z.string())
    })
});

export type ProjectSchema = z.infer<typeof projectSchema>;
export type SocialSchema = z.infer<typeof socialSchema>;
export type ContactSchema = z.infer<typeof contactSchema>;
export type CVScheme = z.infer<typeof cvScheme>;

const projectsCollection = defineCollection({ schema: projectSchema });
const socialCollection = defineCollection({
    type: 'data',
    schema: socialSchema
});
const contactCollection = defineCollection({
    type: 'data',
    schema: contactSchema
});
const cvCollection = defineCollection({
    type: 'data',
    schema: cvScheme
});

export const collections = {
    'projects': projectsCollection,
    'socials': socialCollection,
    'contacts': contactCollection,
    'cv': cvCollection
};
