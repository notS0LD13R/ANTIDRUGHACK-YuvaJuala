import { db } from "./firebase-config";

import {collection,addDoc, GeoPoint,getDocs} from 'firebase/firestore'

export interface reportData{
    date:string,
    lat:number,
    long:number,
    remarks:string
}

export interface blogData{
    id:string,
    Heading:string,
    Para:string
}

export const addReport=async (data:reportData)=>{
    try{
        const docRef=await addDoc(collection(db,'Reports'),{
            Date:data.date,
            Location:new GeoPoint(data.lat,data.long),
            Remarks:data.remarks
        })
        console.log(docRef.id)
    }catch(err){
        console.log(err)
    }
}

export const fetchBlog =async () => {
    const blogArray : blogData[] = [];
    (await getDocs(collection(db,'Blogs'))
    ).forEach((doc) => {
        console.log(doc.data())
        blogArray.push(
            {
                id:doc.id,
                ...(doc.data())
            } as blogData
        )
    });

    return blogArray
}

