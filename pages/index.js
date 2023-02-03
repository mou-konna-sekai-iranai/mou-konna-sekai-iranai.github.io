import Link from 'next/link'

const Index = () => {
    return (
        <>
            <div>Welcome to Next.js!</div>
            <Link href="/linkSample">
                link sample page
            </Link>
        </>
    )
}

export default Index