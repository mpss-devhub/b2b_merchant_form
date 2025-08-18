import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ResponsiveTanstackTable from "../components/MerchantTable";
import { getMerchant } from "../services/merchantRegisterService";

const AdminDashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMerchant();
                if (response.success) {
                    setData(response.data);
                } else {
                    console.error(
                        "Failed to fetch merchants:",
                        response.message
                    );
                }
            } catch (error) {
                console.error("Error fetching merchants:", error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <Layout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <ResponsiveTanstackTable data={data} />
            </div>
        </Layout>
    );
};

export default AdminDashboard;
