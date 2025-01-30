/* eslint-disable @next/next/no-img-element */

import React from 'react'

const Testimonials = () => {
    return (
        <section className="bg-[url('/blog-hero.jpg')] p-10 w-full">
            <div>
                <h3 className='mb-10 p-5 text-center text-white font-bold text-4xl'>Testimonials</h3>
                <div className="grid mb-8 border rounded-lg border-gray-700 md:mb-12 md:grid-cols-2 bg-gray-800">
                    <figure className="flex flex-col items-center justify-center p-8 text-center border-b rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-gray-800 border-gray-700">
                        <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-400">
                            <h3 className="text-lg font-semibold text-white">Found my dream beach house</h3>
                            <p className="my-4">&quot;So helpful with finding the house and environment that i wanted&quot;</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium text-white text-left ms-3">
                                <div>Bonnie Green</div>
                                <div className="text-sm text-gray-400 ">Developer at Open AI</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col items-center justify-center p-8 text-center border-b md:rounded-se-lg bg-gray-800 border-gray-700">
                        <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-400">
                            <h3 className="text-lg font-semibold text-white">I felt 100% confident partnering with Dream Home</h3>
                            <p className="my-4">&quot;Sold my house recently with Dream Home and while this can be a stressful process, Dream Home make it easier, now i&apos;m trying to buy next house with Dream Home&quot;</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium text-white text-left ms-3">
                                <div>Roberta Casas</div>
                                <div className="text-sm text-gray-400">Lead designer at Dropbox</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col items-center justify-center p-8 text-center border-b md:rounded-es-lg md:border-b-0 md:border-e bg-gray-800 border-gray-700">
                        <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-400">
                            <h3 className="text-lg font-semibold text-white">Gave us many helpful suggestions on how to update our home</h3>
                            <p className="my-4">&quot;I would highly recommend Dream Home. They gave us many helpful suggestions on how to update our home. We followed many of their ideas and our home looked amazing.&quot;</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium text-white text-left ms-3">
                                <div>Jese Leos</div>
                                <div className="text-sm text-gray-400">Software Engineer at Facebook</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col items-center justify-center p-8 text-center rounded-b-lg md:rounded-se-lg bg-gray-800 border-gray-700">
                        <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-400">
                            <h3 className="text-lg font-semibold text-white">Efficient Collaborating</h3>
                            <p className="my-4">&quot;It was such a pleasure working with Dream Home who seemed to have all answers to my real estate questions&quot;</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium text-white text-left ms-3">
                                <div>Joseph McFall</div>
                                <div className="text-sm text-gray-400">CTO at Google</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Testimonials