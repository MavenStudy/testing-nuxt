export default defineEventHandler(async (event) => {

    const { name } = getQuery(event);

    const { age } = await readBody(event);

    return {
        message: `Hi ${ name }. Age is ${ age }`,

    };
});