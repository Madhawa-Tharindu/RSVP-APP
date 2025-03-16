'use server'

import { createClient } from "../utils/supabase/server";

export async function submitRSVP(formData: FormData) {
    const supabase = createClient();
    console.log(supabase, "supabase_client");

  const name = formData.get("name");
  const email = formData.get("email");
  const accompany = formData.get("accompany");
  const attendance = formData.get("attendance");

  //console.log(formData, 'formData');


  const { data, error } = await supabase
  .from("rsvps")
  .insert([{ name, email, accompany, attendance }]);
console.log(data, "data_submitRSVP");

if (error) {
  console.error("Error inserting RSVP:", error);
  return { success: false, message: "Failed to submit RSVP", error };
}

return { success: true, message: "RSVP Submitted Successfully"};

}

