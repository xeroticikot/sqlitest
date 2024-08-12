import { getInitialPages } from '$lib/server/db';

export async function load() {
    const pages = getInitialPages();
    console.log(pages)

    return {
        pages,
    };
}
