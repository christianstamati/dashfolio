import Image from "next/image";
import Link from "next/link";
import JourneyItem from "@/app/(frontend)/about/journey-item";
import Description from "@/components/description";
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
						className="rounded-2xl grayscale filter"
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
					title="How it all started"
					date="May, 2010"
					description="I’ve always loved videogames, and one day I asked myself: “How do they make these?” That question started everything. I began experimenting with 3D modeling without really knowing what I was doing, but I was fascinated. Soon after, I discovered game engines like Unity and CryEngine. That’s when I realized programming was the key to creating real interactive experiences."
				/>

				<JourneyItem
					title="High School"
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
					title="NABA Milano"
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
					title="Professional Start"
					date="Feb, 2021"
					description={
						<>
							I began my career as a Software Developer at{" "}
							<Link
								className="text-pink-500"
								href="https://www.wewear.tech/"
								target="_blank"
							>
								WeWear
							</Link>
							, where I worked on a Unity-based mobile app that created
							personalized avatars for size suggestion and virtual try-on. I
							contributed to both UI and development, gaining my first hands-on
							experience shipping software at scale.
						</>
					}
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
					title="The real fun starts"
					date="Oct, 2022"
					description={
						<>
							As our team’s focus evolved, we shifted toward building
							high-quality 3D configurators. One of the key milestones was the{" "}
							<Link
								className="text-pink-500"
								href="https://www.modestobertotto.com/pages/configuratore-3d"
								target="_blank"
							>
								Modesto Bertotto
							</Link>{" "}
							project, where we developed a scalable configurator streamed from
							the cloud with a React webapp as the frontend. This marked my
							entry into the JavaScript and full-stack world. Since then, I’ve
							worked on several configurators and ecommerce integrations,
							strengthening my expertise in both web and 3D development.
						</>
					}
					images={[
						{
							src: "/static/mb.png?v=3",
							alt: "Modesto Bertotto",
						},
						{
							src: "/static/hrx.png",
							alt: "HRX",
						},
						{
							src: "/static/bag.png?v=3",
							alt: "Bag",
						},
					]}
				/>

				<JourneyItem
					title="Today"
					date="Aug, 2025"
					description={
						<>
							I now work at{" "}
							<Link
								className="text-pink-500"
								href="https://www.wewear.tech/"
								target="_blank"
							>
								WeWear
							</Link>{" "}
							as a software developer, building a flexible 3D configurator
							platform that manages assets, materials, and product variations.
							It brings together everything I’ve learned: design, 3D, web, and
							software engineering. My passion for creating interactive,
							user-centered digital experiences continues to drive me, whether
							it’s through game engines, web apps, or entirely new technologies.
						</>
					}
				/>
			</div>
		</div>
	);
}
