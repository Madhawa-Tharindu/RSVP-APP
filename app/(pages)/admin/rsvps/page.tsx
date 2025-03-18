import RSVPTable from "@/app/_components/RSVPTable";
import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import Link from "next/link";
import { getRSVP } from "@/app/actions/getRSVP";

export default async function RSVPsPage() {
    const { success, data, message } = await getRSVP();

    // TODO : redirect to login if no auth

    if (!success) {
        return <div className="container mx-auto mt-8 p-4">Error: {message}</div>;
      }

    return (
        <div className="container mx-auto mt-8 p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">All RSVPs</h1>
                <div className="flex items-center gap-2">
                    <Link href={"/"}>
                    <Button variant={"outline"}>
                        <House />
                    </Button>
                    </Link>
                    {/* Logout*/}
                    <Button variant={"outline"}>Sign Out</Button>
                </div>
            </div>


            {/* Tables */}
            <RSVPTable data={data || []} />
        </div>
    )
}