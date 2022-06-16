import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

const CallApiVanilla = () => {

    const [dataUser, setDataUser] = useState({
        avatar : '',
        email: '',
        first_name: '',
        last_name: ''
    })

    const [dataJob, setDataJob] = useState({
        name: '',
        job: ''
    })

    useEffect(() => {
        // Call API dengan method GET
        // fetch('https://reqres.in/api/users/2')
        // .then(response => response.json())
        // .then(json => console.log(json))

        //Call API dengan method POST
        // const dataForAPi = {
        //     "name": "morpheus",
        //     "job": "leader"
        // }

        // console.log('data object: ', dataForAPi)
        // console.log('data stringify: ', JSON.stringify(dataForAPi))

        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(dataForAPi)
        // })
        // .then(response => response.json())
        // .then(json => {
        //     console.log('post response: ', json)
        // })

    }, [])

    const getData = () => {
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setDataUser(json.data)
        })
    }

    const postData = () => {
        const dataForAPi = {
            "name": "morpheus",
            "job": "leader"
        }

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(dataForAPi)
        })
        .then(response => response.json())
        .then(json => {
            console.log('post response: ', json)
            setDataJob(json)
        })

    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Call Api dengan Vanilla Js</Text>
            <Button title="GET DATA" onPress={getData}></Button>
            <Text>Response GET DATA</Text>
            <Image source={{uri: dataUser.avatar}}  style={styles.avatar}/>
            <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>{dataUser.email}</Text>
            <View style={styles.line} />
            <Button title="POST DATA" onPress={postData}></Button>
            <Text>Response POST DATA</Text>
            <Text>{dataJob.name}</Text>
            <Text>{dataJob.job}</Text>
        </View>
    )
}

export default CallApiVanilla

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center'
    },
    line: {
        height: 2, backgroundColor: 'black', marginVertical: 20
    },
    avatar: {
        height: 100, width: 100, borderRadius: 50
    }
})