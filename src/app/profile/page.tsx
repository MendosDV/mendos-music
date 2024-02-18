import LapinCretin from "@/components/LapinCretin";

export const metadata = {
  title: 'Profile Lapin Crétin',
  description: 'By Mickael for everyone',
}

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Je suis un profile de : </p>
      <LapinCretin />
    </div>
  )
}
