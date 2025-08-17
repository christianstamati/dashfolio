import Image from "next/image";
import Link from "next/link";
import JourneyItem from "@/app/(frontend)/about/journey-item";
import Description from "@/components/description";
import Socials from "@/components/socials";
import Title from "@/components/title";

export default function AboutPage() {
	return (
		<div className="space-y-12">
			{/* Header Section */}
			<div>
				<Title>About me</Title>
				<Description>
					A look into my path — from being a kid curious about how videogames
					were made, to building 3D configurators and full-stack applications.
					It’s been a journey of curiosity, creativity, and continuous learning.
				</Description>
				{/* cover image */}
				<div className="pt-4">
					<Image
						className="rounded-2xl"
						src="/static/cover-image-about.jpg"
						alt="Cover"
						width={1000}
						height={1000}
					/>
				</div>
			</div>

			{/* Journey Timeline */}
			<div className="space-y-16">
				<JourneyItem
					title="Middle School Curiosity"
					date="May, 2010"
					description="I’ve always loved videogames, and one day I asked myself: “How do they make these?” That question started everything. I began experimenting with 3D modeling without really knowing what I was doing, but I was fascinated. Soon after, I discovered game engines like Unity and CryEngine. That’s when I realized programming was the key to creating real interactive experiences."
				/>

				<JourneyItem
					title="High School in Graphic Design"
					date="Nov, 2011"
					description={
						<>
							In high school I chose to study Graphic Design, the closest thing
							in my town that matched my passion for computers. It turned out to
							be a great decision: I learned UI/UX fundamentals, design tools,
							and combined them with my self-taught 3D skills. My proudest
							project was DOMUM, a house configurator built in Unreal Engine —
							my first project that blended code, 3D, and design.{" "}
							<Link
								className="text-pink-500"
								href="https://www.youtube.com/watch?v=14jkZXhkvzk"
								target="_blank"
							>
								Check it out
							</Link>{" "}
							(Yes, the loading spinner you see in the video is fake)
						</>
					}
					images={[
						{
							src: "/static/domum.png",
							alt: "DOMUM",
						},
					]}
				/>

				<JourneyItem
					title="NABA Milano (Creative Technologies)"
					date="Jun, 2017"
					description="With the support of my English teacher, I joined the Creative Technologies course at NABA in Milan. There, I explored storytelling, game development, and even filmmaking. For my thesis, my team researched game engines in cinema, focusing on virtual production with Unreal Engine and LED walls. This project gave me the chance to collaborate on short films with NABA and experiment with cutting-edge technology."
					images={[
						{
							src: "/static/vp.jpg",
							alt: "Virtual Production",
						},
						{
							src: "/static/motion-capture.png",
							alt: "Virtual Production",
						},
						{
							src: "/static/vp1.jpg",
							alt: "Virtual Production",
						},
					]}
				/>

				<JourneyItem
					title="First Developer Role"
					date="Feb, 2021"
					description="I started my career as a Software Developer, working on a Unity-based mobile app that built personalized avatars for size suggestion and virtual try-on. I contributed to both UI and development, gaining my first real experience shipping software."
					images={[
						{
							src: "/static/wavtr.jpg?v=2",
							alt: "Avatar",
						},
						{
							src: "/static/johnny.png",
							alt: "Johnny",
						},
						{
							src: "/static/media-pipe.png",
							alt: "media-pipe",
						},
					]}
				/>

				<JourneyItem
					title="3D Configurators"
					date="Oct, 2022"
					description="Our focus shifted to building high-quality configurators. For the Modesto Bertotto project, we developed a scalable 3D configurator streamed from the cloud, with a React webapp as the frontend. This was my entry point into the JavaScript and full-stack world. From there, I worked on multiple web apps, ecommerce integrations, and configurators — sharpening my skills across the stack."
					images={[
						{
							src: "/static/mb.png",
							alt: "Modesto Bertotto",
						},
						{
							src: "/static/hrx.png",
							alt: "HRX",
						},
						{
							src: "/static/bag.png",
							alt: "Bag",
						},
						{
							src: "/static/shirt.png",
							alt: "Jacket",
						},
					]}
				/>

				<JourneyItem
					title="Today"
					date="Aug, 2025"
					description="I now work at WeWear as a software developer, building a flexible 3D configurator platform that manages assets, materials, and product variations. It brings together everything I’ve learned: design, 3D, web, and software engineering. My passion for creating interactive, user-centered digital experiences continues to drive me, whether it’s through game engines, web apps, or entirely new technologies."
				/>
			</div>

			<div className="pt-8">
				<Socials />
			</div>
		</div>
	);
}
