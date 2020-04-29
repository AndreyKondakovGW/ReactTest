import { connect } from 'react-redux';
import Redactor from './Redactor';
import {ChangeCurentPhotoAC,SetCurrentConspectCR,AddPhotoAC,LoadConspectAC,SetCordinateAC} from './../../../redux/Curentconspect-reducer';
import * as axios from 'axios';

let mapStatetoProps =(state)=>{
    return {
        Photos: state.Curentconspectreducer.LogicData.CurrentConspect.data.fotos,
        Conspectname : state.Curentconspectreducer.LogicData.CurrentConspect.name,
        CurentconspectID:state.Curentconspectreducer.LogicData.CurrentConspect.id,
        curentfoto : state.Curentconspectreducer.LogicData.CurrentConspect.data.curentfoto,      
        Currentpotopath: state.Curentconspectreducer.LogicData.CurrentConspect.data.curentfoto.path,
        Conspects: state.UserDatareducer.UserData.Conspects,
        coordinate: state.Curentconspectreducer.Coordinate
    }
}

let mapDispatchtoProps =(dispatch) =>{
    return {
        ChangeCurPR: () =>{
            dispatch({type: "ChangeCurPR"})
        },
        ChangeCurPL: ()=>{
            dispatch({type: "ChangeCurPL"})
        },
        ChangeCurentPhoto: (id)=>{
            let action=ChangeCurentPhotoAC(id)
            dispatch(action)
        },
        LoadConspect:(conspectname,id,OpenConspect)=>{
            let action=LoadConspectAC(conspectname,id,OpenConspect);
            dispatch(action);
        },
        OpenConspect: (name, id, fotos)=>{
            console.log("hello Container")
            const conspect={
                name:name,
                id: id,
                data: {
                    fotos: fotos
                }
            }
            console.log(conspect)
            let action=SetCurrentConspectCR(conspect)
            dispatch(action)
        },
        Addphoto: (photo)=>{
            let action=AddPhotoAC(photo)
            dispatch(action)
        },
        SetCordinate:(x1,x2,y1,y2)=>{
            let action=SetCordinateAC(x1,x2,y1,y2)
            dispatch(action)
        },
        SaveTags:(tags,photoid,coordinate)=>{
            console.log("Сохраняю  кусок фото с ид "+ photoid)
            console.log(coordinate)
            axios.post('http://127.0.0.1:5000/sendfragment',{photo_id:photoid,x1:coordinate.x1,y1:coordinate.y1,x2:coordinate.x2,y2:coordinate.y2,tags:tags}).then(function(){
                console.log('SUCCESS!!')})
        }      
    }
}

const RedactorContainer=connect(mapStatetoProps,mapDispatchtoProps)(Redactor);

export default RedactorContainer;