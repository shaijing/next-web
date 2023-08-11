import Image from "next/image"

export default function MyProfilePc() {
    return (
        <section className="w-full mx-auto">
            <Image
                className="border-4 border-black drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                src="/images/favicon.ico"
                width={200}
                height={200}
                alt="logo"
                priority={true}
            />
        </section>
    )
}