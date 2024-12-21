import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Pencil, Trash, Plus, Loader2 } from "lucide-react";

export const ServiceCardsAdmin = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    icon_name: "",
    title: "",
    description: "",
  });

  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("service_cards")
        .select("*")
        .order("created_at");
      if (error) throw error;
      return data;
    },
  });

  const addMutation = useMutation({
    mutationFn: async (newService: typeof formData) => {
      const { data, error } = await supabase
        .from("service_cards")
        .insert([newService])
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
      setIsAdding(false);
      setFormData({ icon_name: "", title: "", description: "" });
      toast({
        title: "Success",
        description: "Service card added successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add service card: " + error.message,
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (service: typeof formData & { id: string }) => {
      const { data, error } = await supabase
        .from("service_cards")
        .update({
          icon_name: service.icon_name,
          title: service.title,
          description: service.description,
        })
        .eq("id", service.id)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
      setEditingId(null);
      toast({
        title: "Success",
        description: "Service card updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update service card: " + error.message,
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("service_cards")
        .delete()
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
      toast({
        title: "Success",
        description: "Service card deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete service card: " + error.message,
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Service Cards</h2>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)}>
            <Plus className="w-4 h-4 mr-2" /> Add Service
          </Button>
        )}
      </div>

      {isAdding && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addMutation.mutate(formData);
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-sm font-medium">Icon Name</label>
                <Input
                  value={formData.icon_name}
                  onChange={(e) =>
                    setFormData({ ...formData, icon_name: e.target.value })
                  }
                  placeholder="e.g., Code, Database, Globe"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Service title"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Service description"
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" disabled={addMutation.isPending}>
                  {addMutation.isPending ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Plus className="w-4 h-4 mr-2" />
                  )}
                  Add Service
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAdding(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {services?.map((service) => (
          <Card key={service.id}>
            <CardContent className="pt-6">
              {editingId === service.id ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateMutation.mutate({
                      id: service.id,
                      ...formData,
                    });
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-sm font-medium">Icon Name</label>
                    <Input
                      value={formData.icon_name}
                      onChange={(e) =>
                        setFormData({ ...formData, icon_name: e.target.value })
                      }
                      placeholder="e.g., Code, Database, Globe"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Title</label>
                    <Input
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      placeholder="Service title"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      placeholder="Service description"
                      required
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit" disabled={updateMutation.isPending}>
                      {updateMutation.isPending ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        "Save Changes"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Icon: {service.icon_name}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          setEditingId(service.id);
                          setFormData({
                            icon_name: service.icon_name,
                            title: service.title,
                            description: service.description,
                          });
                        }}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to delete this service?"
                            )
                          ) {
                            deleteMutation.mutate(service.id);
                          }
                        }}
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-2">{service.description}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};