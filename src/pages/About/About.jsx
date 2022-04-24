import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
	return (
		<div className="container mx-auto">
			<section class="lg:py-12 lg:flex lg:justify-center h-screen">
				<div class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
					<div class="lg:w-1/2">
						<div
							class="h-64 bg-cover lg:rounded-lg lg:h-full"
							style={{
								backgroundiImage:
									"url(https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80)",
							}}
						></div>
					</div>

					<div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
						<h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
							Build Your New{" "}
							<span class="text-blue-600 dark:text-blue-400">Idea</span>
						</h2>
						<p class="mt-4 text-gray-600 dark:text-gray-400">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
							modi reprehenderit vitae exercitationem aliquid dolores ullam
							temporibus enim expedita aperiam mollitia iure consectetur dicta
							tenetur, porro consequuntur saepe accusantium consequatur.
						</p>

						<div class="mt-8">
							<Link
								to="#"
								class="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
							>
								Start Now
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
