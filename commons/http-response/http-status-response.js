const httpStatusResponse = async (code, statusMessage, localError) => ({
    statusCode: (code || 501),
    body: (statusMessage || 'Existe parâmetro que não foi passado para resposta HTTP do Projeto'),
    localization: (localError || 'Não foi encontrado o local do erro.')
   });
module.exports = httpStatusResponse;