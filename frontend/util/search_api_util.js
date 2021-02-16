

export const search = (searchTerm) => {
    return $.ajax({
        url: `/api/searches/${searchTerm}`,
        method: 'GET'
    });
}