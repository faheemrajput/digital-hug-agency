import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCardsAdmin } from "@/components/admin/ServiceCardsAdmin";
import { ContactCardsAdmin } from "@/components/admin/ContactCardsAdmin";
import { FooterContentAdmin } from "@/components/admin/FooterContentAdmin";
import { supabase } from "@/integrations/supabase/client";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
        return;
      }

      const { data, error } = await supabase.rpc('get_claims');
      if (error || !data?.role || data.role !== 'admin') {
        console.error('Not authorized as admin:', error);
        navigate("/");
      }
    };

    checkAdmin();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="contact">Contact Cards</TabsTrigger>
            <TabsTrigger value="footer">Footer Content</TabsTrigger>
          </TabsList>
          
          <TabsContent value="services">
            <ServiceCardsAdmin />
          </TabsContent>
          
          <TabsContent value="contact">
            <ContactCardsAdmin />
          </TabsContent>
          
          <TabsContent value="footer">
            <FooterContentAdmin />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;