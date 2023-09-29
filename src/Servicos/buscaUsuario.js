import { api } from "./api";

export async function buscaUsuario(nome){
    try{
        const resultado = await api.get()
        return resultado.data
    }catch (erro){
        console.log(erro)
        return('')
    }
}