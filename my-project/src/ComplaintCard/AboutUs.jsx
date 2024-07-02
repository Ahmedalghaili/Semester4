import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Report/Header';
import Footer from '../Home/Footer';
function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
           <Header/>
            <main className="flex-grow flex flex-col items-center py-4 px-2 sm:px-4 lg:px-6">
                <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg space-y-6">
                    <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
                    
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">The Meaning Behind the Name MitraKota</h2>
                        <p className="text-gray-700 mt-2">
                            The name "MitraKota" was chosen with a profound philosophy, aiming to bridge the relationship between the community and the government. 
                            We believe that a solid partnership between citizens and authorities is key to achieving significant progress in city development. 
                            Through this collaboration, we aim to create a better, safer, and more comfortable environment for all city residents. 
                            MitraKota aims to be an effective communication channel where every voice from the community can be heard and taken seriously by the government.
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">The Function of MitraKota</h2>
                        <p className="text-gray-700 mt-2">
                            MitraKota is a platform designed to facilitate the community in reporting various issues occurring in their surroundings. 
                            Users can upload reports on issues such as damaged infrastructure, environmental cleanliness, safety, and other problems. 
                            Every report submitted will be forwarded to the relevant authorities for swift and efficient action. 
                            We also provide a feature to track the status of reports so users can monitor the progress of the issues they have reported. 
                            With MitraKota, active community participation becomes easier and more effective.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">Number of Users</h2>
                        <p className="text-gray-700 mt-2">
                            Since its launch, MitraKota has successfully attracted the attention and trust of thousands of users. 
                            Our user base continues to grow as awareness increases about the importance of community participation in city development. 
                            We are proud of the community that has formed, where citizens actively contribute by reporting issues and seeking solutions together. 
                            This success is proof that collaboration between the community and the government can bring about real positive changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">Benefits of MitraKota for Government and Community</h2>
                        <p className="text-gray-700 mt-2">
                            MitraKota is beneficial not only for the community but also for the government. 
                            With this platform, the government can easily identify and prioritize issues that need immediate attention. 
                            The data collected through community reports can also be used for better planning and decision-making. 
                            For the community, MitraKota provides confidence that their voices are heard and their issues are addressed seriously. 
                            This creates a sense of ownership and shared responsibility in maintaining and building the city.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">Vision and Mission of MitraKota</h2>
                        <p className="text-gray-700 mt-2">
                            MitraKota's vision is to create a better city through active participation and close collaboration between the community and the government. 
                            We are committed to being a transparent, responsive, and innovative platform in addressing urban issues. 
                            Our mission is to provide an effective tool for the community to report problems, ensure that every report is followed up quickly, 
                            and build trust between citizens and authorities. We believe that by working together, we can achieve a more advanced and prosperous city.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">MitraKota's Development Plans</h2>
                        <p className="text-gray-700 mt-2">
                            At MitraKota, we are always striving to improve and develop this platform. 
                            In the near future, we plan to add new features such as location-based reporting, social media integration, and real-time notifications for report updates. 
                            We will also continue to collaborate with various parties, including community organizations and the government, 
                            to ensure that every report can be resolved effectively. We are committed to listening to user feedback and adapting according to their needs.
                        </p>
                    </section>
                </div>
            </main>
           <Footer/>
        </div>
    );
}

export default AboutUs;
