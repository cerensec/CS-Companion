import React, { useState, useEffect } from 'react';
import {Navigate, useParams} from 'react-router-dom';
import { checkToken } from '../api/user';
import { getAllContacts } from '../api/contact';
import { getAllClients } from '../api/client';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUser } from '../slices/userSlice';
import { setContacts } from '../slices/contactSlice';
import { setClients } from '../slices/clientSlice';
import { getAllSuppliers } from '../api/supplier';
import { setSuppliers } from '../slices/supplierSlice';
import { getAllProjects } from '../api/projects';
import { setProjects } from '../slices/projectSlice';

const RequireAuth = (props) =>{
    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    const params = useParams();

    const Child = props.child;

    const [redirect, setRedirect] = useState(false);

        useEffect(()=>{
            //récupération du token dans le storage
            const token = localStorage.getItem("token");
            console.log(token);
            //si il ne trouve pas de token et que la route est restreinte
            if (token === null && props.auth) {
                //on demande la redirection
                setRedirect(true);
            //sinon
            }else{
                //si l'utilisateur n'est pas connecté dans le store
                if (user.isLogged === false) {
                    //requête axios vers checkToken
                    console.log("TOKEN:",token);
                    checkToken(token)
                    .then((res) => {
                        console.log(res);
                        //si la reponse n'est pas 200
                        if (res.status !== 200) {
                            if (props.auth) {
                                //on demande la redirection
                                setRedirect(true);
                            }     
                        }else{
                            //on crée notre objet user avec la réponse de l'axios
                            let myUser = res.user[0];
                            //on ajoute une propriété token 
                            myUser.token = token;
                            // console.log(myUser);
                            //envoi dans le store vers l'action pour connecter l'utilisateur (dispatch)
                            dispatch(setUser(myUser));

                            getAllContacts()
                            .then((res)=>{
                                dispatch(setContacts(res.contact));
                            })
                            .catch((err)=>{
                                console.log(err);
                            })

                            getAllClients()
                            .then((res)=>{
                                dispatch(setClients(res.client));
                            })
                            .catch((err)=>{
                                console.log(err);
                            })

                            getAllSuppliers()
                            .then((res)=>{
                                dispatch(setSuppliers(res.supplier));
                            })
                            .catch((err)=>{
                                console.log(err);
                            })

                            getAllProjects()
                            .then((res)=>{
                                dispatch(setProjects(res.projects))
                            })
                            .catch((err)=>{
                                console.log(err);
                            })
                        }
                    }) 
                    .catch((err) => {
                        //catch la requête axios de checkToken a echoué
                        console.log("error checkToken", err);
                    });
            }
        }
    },[props])

    if(redirect){
        return <Navigate to={"/login"}/>;
    }
    return <Child {...props} params={params} />
}

export default RequireAuth;