import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>some placeholder text again</p>
      <Link href="/dramas">See All Drama Listings</Link>
    </div>
  )
}
