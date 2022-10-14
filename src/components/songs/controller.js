import { PrismaClient } from "@prisma/client";

export const readAll = async (req,res) => {
    try{
        const songs = await PrismaClient.songs.findMany();
        return res.json(songs)
    } catch (error) {
        return res.status(500).json({
        ok: false,
        data: error.message,
        });
    }
};
export const create = async (req, res) =>{
    try{
        const { body } = req
        const songById = await findOne(body.id);
        if (songById) {
            return res.json({
                ok: true,
                data: songById,
            });
        }
        const songs = await prisma.songs.create({
            data:{    
                name,    
                artist,
                album,
                year,
                genre,
                duration
            }
        })
        return res.status(201).json({
            data:songs,
            info: "Song created",
        });
    }catch (error) {
        return res.json({
            info: "Can't create movie",
            error: err.message
        })
    }
};
export const readOne = async(req, res) =>{
    try{
        const { id } = req.params
        const findOne = await prisma.songs.findUnique({
            where: {
                id: Number(id),
            }
        })
        return res.json(findOne)
    }catch (err) {
        console.log(err);
        return res.json({
            info: "Can't read that song",
            error: err.message
        })
      }
}
export const deleteOne = async(req, res) =>{
    try{
        const { id } = req.params
        const deletesongs = await prisma.songs.delete({
            where: {
                id: Number(id),
            },
        })
        return res.json({
            info:"song deleted",
            data: deletesongs
            
        })
    }catch (err) {
        console.log(err.message);
        return res.json({
            info: "song already deleted",
        })
      }
}