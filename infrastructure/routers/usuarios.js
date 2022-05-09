module.exports = class RouteAdapter {
    static route(router){
        router.get("/usuarios", async (req, res) => {
            try {
                console.log('Rota usuarios');
                const usuer = await Users();
                res.send(usuer);
            } catch (error) {
                res.send(error)           
            }  
        });
}
}