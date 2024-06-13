/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import Loading from "./skeleton";
import RequestContent from "./order-content";
import createSupabaseBrowserClient from "@/lib/supabase/client";
import { useRequests } from "@/hooks/useOrders";
import RequestNotFound from "./not-found";

export default function Request({ params }: { params: any }) {
  const { getRequest, currentRequestData } = useRequests();
  console.log("Component rendered with params:", params); // Log when component renders with params

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const initialFetch = async () => {
      setLoading(true); // Start loading
      console.log("Starting initial fetch for request ID:", params.id); // Log before fetching data
      const result = await getRequest(params.id, 500);
      if (result.error) {
        console.log("Error in initial fetch:", result.error); // Log if there's an error
        setError(true);
      } else {
        console.log("Initial fetch successful for request ID:", params.id); // Log on successful fetch
        setError(false);
      }
      setLoading(false); // End loading
    };

    initialFetch();
  }, [params.id]); // Added params.id to dependencies array to reflect changes

  useEffect(() => {
    if (!error) {
      console.log("Setting up Supabase subscription for request follow-up"); // Log before setting up subscription
      const supabase = createSupabaseBrowserClient();
      const subscribedChannel = supabase
        .channel("request-follow-up")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "requests" },
          (payload: any) => {
            console.log(
              "Received update from Supabase for request ID:",
              params.id,
              "Payload:",
              payload
            ); // Log on receiving update
            getRequest(params.id, 0);
          }
        )
        .subscribe();

      return () => {
        console.log(
          "Removing Supabase channel subscription for request follow-up"
        ); // Log on cleanup
        supabase.removeChannel(subscribedChannel);
      };
    }
  }, [error, params.id]); // Added error and params.id to dependencies array to reflect changes

  return (
    <div className="w-full flex justify-center place-items-center">
      {loading ? (
        <Loading />
      ) : error ? (
        <RequestNotFound />
      ) : (
        <RequestContent params={params} requests={currentRequestData} />
      )}
    </div>
  );
}
