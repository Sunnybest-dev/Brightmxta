// contentful.js
import { createClient } from 'contentful';

// Create Contentful client using environment variables
import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT,
});



// Function to fetch blog posts
export const fetchBlogPosts = async () => {
  try {
    const entries = await client.getEntries({ content_type: 'brightmxta' });
    return entries.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};
