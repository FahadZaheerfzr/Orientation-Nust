import { useRouter } from "next/router";
import React from "react";

import videos from "../../../util/episodes.json";

import Layout from "../../../components/Layout";
import Image from "next/image";
import DoodleContainer from "../../../components/DoodleContainer";

const Episode = () => {
  const router = useRouter();
  const { id } = router.query;
  const currentVideo = videos.find((vid) => vid.id === id);

  return (
    <>
      {currentVideo && (
        <Layout title={`ON Station | Episode ${currentVideo.id}`}>
          <div className="flex  flex-col items-center mt-20  dark:text-white">
            <div className="font-jacklyn text-5xl sm:text-7xl font-bold mb-16 relative">
              <p className="header-1">ON Station</p>

              <DoodleContainer
                className={"absolute w-32 aspect-1 -top-10 -left-[40%]"}
                src="/doodles/on-station/1.png"
              />
              <DoodleContainer
                className={"absolute w-32 aspect-1 -top-10 -right-[40%]"}
                src="/doodles/on-station/2.png"
              />
            </div>

            <div className="flex lg:flex-row flex-col justify-center w-full gap-6 px-6 text-tyrian-purple">
              {/* video container */}
              <div className="flex flex-col gap-1">
                <div className="relative overflow-hidden w-full aspect-[16/9]">
                  <iframe
                    src={currentVideo.url}
                    className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                    scrolling="no"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;"
                  />
                </div>
                <h1 className="font-heading text-3xl mt-3">
                  {currentVideo.title}
                </h1>
                <p className="font-body text-sm">{currentVideo.description}</p>
              </div>

              {/* remaining video container */}
              <div className="w-full lg:max-w-xs">
                <h1 className="mb-2 text-2xl font-heading">More Videos</h1>
                <div className="flex flex-col w-full">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className={`cursor-pointer transition-colors w-full
                            ${
                              video.id === id
                                ? "bg-gradient-to-tl from-dark-purple to-ultra-red text-white"
                                : "hover:bg-pale-pink"
                            }
                        `}
                      onClick={() =>
                        router.push(`/on-station/episode/${video.id}`)
                      }
                    >
                      <div className="max-w-md lg:max-w-xs w-full flex gap-2 items-start p-2">
                        <div className="relative overflow-hidden w-1/2 aspect-[16/9] ">
                          <Image
                            src={video.thumbnailUrl}
                            // className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                            alt={video.title}
                            layout="fill"
                          />
                        </div>

                        <div className="w-1/2">
                          <h1 className="text-lg font-subHeading mb-2">
                            {video.title}
                          </h1>
                          <p className="text-xs leading-3 font-body">
                            {video.description.slice(0, 80)}
                            {video.description.length > 80 && "..."}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Episode;
