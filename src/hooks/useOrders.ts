import { createClient } from "@supabase/supabase-js";
import { use, useState } from "react";

export const useRequests: any = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
  );
  const [requestsData, setRequestsData] = useState<any>([]);
  const [currentRequestData, setCurrentRequestData] = useState<any>([]);

  const createRequest = async (props: any, duration?: any) => {
    console.log("Props:", props); // Log the props object

    const result: any = await supabase
      .from("requests")
      .insert({
        requester_first_name: props.requester_first_name,
        requester_last_name: props.requester_last_name,
        requester_contact_number: props.requester_contact_number,
        status: "Ongoing",
        coordinates: props.coordinates,
        calamity_type: props.calamity_type,
        employees_id: props.employee_id,
      })
      .select();

    console.log(result); // Log the insert result

    if (result.error) {
      console.error(result.error); // Log the insert error
      return result.error;
    }

    const foodsupplyResult = await supabase
      .from("use_foodsupplies")
      .insert(
        props.use_foodsupplies.map((foodsupply: any) => ({
          request_id: result.data[0].id,
          foodsupply_id: foodsupply.foodsupply_id,
          name: foodsupply.name,
          description: foodsupply.description,
          quantity: foodsupply.quantity,
        }))
      )
      .select();

    const vehicleResult = await supabase
      .from("use_vehicles")
      .insert(
        props.use_vehicles.map((vehicle: any) => ({
          request_id: result.data[0].id,
          vehicle_id: vehicle.vehicle_id,
          name: vehicle.name,
          description: vehicle.description,
          quantity: vehicle.quantity,
        }))
      )
      .select();

    const EquipmentResult = await supabase
      .from("use_equipments")
      .insert(
        props.use_equipments.map((equipment: any) => ({
          request_id: result.data[0].id,
          equipment_id: equipment.equipment_id,
          name: equipment.name,
          description: equipment.description,
          quantity: equipment.quantity,
        }))
      )
      .select();

    await new Promise((resolve) => setTimeout(resolve, duration));

    return result;
  };

  const getRequests = async (props?: any) => {
    const result = await supabase
      .from("requests")
      .select(
        "*, employees(*, roles(*)), use_foodsupplies(*), use_equipments(*), use_vehicles(*)"
      )
      .order("created_at", { ascending: false });

    if (result.error) {
      console.error("Get Requests Error:", result.error); // Log the get requests error
      return result.error;
    }

    const { data, error } = result;

    return setRequestsData(data);
  };
  const getRequest = async (id: string, duration?: number) => {
    const { data, error } = await supabase
      .from("requests")
      .select(
        `
        id,
        requester_first_name,
        requester_last_name,
        requester_contact_number,
        requester_email,
        coordinates,
        employees(
          id,
          first_name,
          last_name,
          image_url,
          contact_number,
          email,
          roles(
            role
          )
        ),
        use_foodsupplies(
          id,
          foodsupply_id,
          name,
          description,   
          quantity,
      
        ),
        use_equipments(
          id,
          equipment_id,
          name,
          description,
          quantity, 
        ),
        use_vehicles(
          id,
          vehicle_id,
          name,
          description,
     plate_number,
          quantity,     
        ),
        calamity_type,
        status,
        created_at
    `
      )

      .eq("id", id);

    await new Promise((resolve) => setTimeout(resolve, duration));
    if (data?.length === 0) return true;
    setCurrentRequestData(data);
    return error;
  };
  const updateRequest = async (props: any, duration?: number) => {
    const result = await supabase
      .from("requests")
      .update({
        name: props.name,
        description: props.description,
        image_url: props.image_url,
        stock_quantity: props.stock_quantity,
        status: props.status,
      })
      .eq("id", props.id);

    await new Promise((resolve) => setTimeout(resolve, duration));
    return result;
  };
  const updateRequestStatus = async (props: any, duration?: number) => {
    const result = await supabase
      .from("requests")
      .update({
        status: props.status,
      })
      .eq("id", props.id);

    await new Promise((resolve) => setTimeout(resolve, duration));

    return JSON.stringify(result);
  };
  const deleteRequest = async (props: any, duration: number = 2000) => {
    const result = await supabase.from("requests").delete().eq("id", props.id);

    await new Promise((resolve) => setTimeout(resolve, duration));
    return result;
  };

  return {
    // states
    requestsData,
    currentRequestData,

    // methods
    createRequest,
    getRequest,
    getRequests,
    updateRequest,
    updateRequestStatus,
    deleteRequest,
  };
};
