import React, {useState, useEffect} from 'react'
import {Statistic, Icon, Grid, Container, Image, Segment, Dimmer, Loader} from 'semantic-ui-react'
import {serviceApi} from '../misc/ServiceApi'
import {handleLogError} from '../misc/Helpers'
import {useAuth} from "../context/AuthContext";
import {UserInfo} from "./UserInfo";
import {Wishlists} from "../wishlist/Wishlists";

function Home() {
    const [isLoading, setIsLoading] = useState(false);

    const {getUser, userIsAuthenticated, userLogout} = useAuth();

    // useEffect(() => {
    //   async function fetchData() {
    //     setIsLoading(true)
    //     try {
    //     } catch (error) {
    //       handleLogError(error)
    //     } finally {
    //       setIsLoading(false)
    //     }
    //   }
    //   fetchData()
    // }, [])

    if (isLoading) {
        return (
            <Segment basic style={{marginTop: window.innerHeight / 2}}>
                <Dimmer active inverted>
                    <Loader inverted size='huge'>Loading</Loader>
                </Dimmer>
            </Segment>
        )
    }

    return (
        <>
            <section className="flex flex-col my-4">
                {
                    userIsAuthenticated() ?
                        <UserInfo/> :
                        (<div className="flex justify-center mt-7">
                            <p className="text-3xl"> Please, login for better user experience</p>
                        </div>)
                }
            </section>
            <section>
                <Wishlists/>
            </section>
        </>
    )
}

export default Home