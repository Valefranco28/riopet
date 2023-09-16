import Link from "next/link";

export default function about(){
    return (
        <div>
        <h1>Information Page</h1>
        <p>This is a sample information page built with Next.js.</p>
        <p>
          You can provide any information you want here. You can also include
          links to other pages.
        </p>
        <Link href="/">
          Go back to the homepage
        </Link>
      </div>
    )
}