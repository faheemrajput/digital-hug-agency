import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Pencil, Trash, Plus, Loader2 } from "lucide-react";

export const ContactCardsAdmin = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    icon_name: "",
    title: "",
    content: "",
    sub_content: "",
  });

  const { data: contacts, isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contact_cards")
        .select("*")
        .order("created_at");
      if (error) throw error;
      return data;
    },
  });

  const addMutation = useMutation({
    mutationFn: async (newContact: typeof formData) => {
      const { data, error } = await supabase
        .from("contact_cards")
        .insert([newContact])
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      setIsAdding(false);
      setFormData({ icon_name: "", title: "", content: "", sub_content: "" });
      toast({
        title: "Success",
        description: "Contact card added successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add contact card: " + error.message,
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (contact: typeof formData & { id: string }) => {
      const { data, error } = await supabase
        .from("contact_cards")
        .update({
          icon_name: contact.icon_name,
          title: contact.title,
          content: contact.content,
          sub_content: contact.sub_content,
        })
        .eq("id", contact.id)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      setEditingId(null);
      toast({
        title: "Success",
        description: "Contact card updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update contact card: " + error.message,
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("contact_cards")
        .delete()
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      toast({
        title: "Success",
        description: "Contact card deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete contact card: " + error.message,
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
        <h2 className="text-2xl font-bold">Contact Cards</h2>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)}>
            <Plus className="w-4 h-4 mr-2" /> Add Contact
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
                  placeholder="e.g., Phone, Mail, MapPin"
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
                  placeholder="Contact title"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Content</label>
                <Input
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="Main content"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Sub Content</label>
                <Input
                  value={formData.sub_content}
                  onChange={(e) =>
                    setFormData({ ...formData, sub_content: e.target.value })
                  }
                  placeholder="Additional information (optional)"
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" disabled={addMutation.isPending}>
                  {addMutation.isPending ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Plus className="w-4 h-4 mr-2" />
                  )}
                  Add Contact
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
        {contacts?.map((contact) => (
          <Card key={contact.id}>
            <CardContent className="pt-6">
              {editingId === contact.id ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateMutation.mutate({
                      id: contact.id,
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
                      placeholder="e.g., Phone, Mail, MapPin"
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
                      placeholder="Contact title"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Content</label>
                    <Input
                      value={formData.content}
                      onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      placeholder="Main content"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Sub Content</label>
                    <Input
                      value={formData.sub_content}
                      onChange={(e) =>
                        setFormData({ ...formData, sub_content: e.target.value })
                      }
                      placeholder="Additional information (optional)"
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
                      <h3 className="text-lg font-semibold">{contact.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Icon: {contact.icon_name}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          setEditingId(contact.id);
                          setFormData({
                            icon_name: contact.icon_name,
                            title: contact.title,
                            content: contact.content,
                            sub_content: contact.sub_content || "",
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
                              "Are you sure you want to delete this contact?"
                            )
                          ) {
                            deleteMutation.mutate(contact.id);
                          }
                        }}
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-2">{contact.content}</p>
                  {contact.sub_content && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {contact.sub_content}
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};