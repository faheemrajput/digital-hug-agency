import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Pencil, Loader2 } from "lucide-react";

export const FooterContentAdmin = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    content: "",
  });

  const { data: footerContent, isLoading } = useQuery({
    queryKey: ["footer"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("footer_content")
        .select("*")
        .order("created_at");
      if (error) throw error;
      return data;
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({
      id,
      content,
    }: {
      id: string;
      content: string;
    }) => {
      let parsedContent;
      try {
        parsedContent = JSON.parse(content);
      } catch (e) {
        throw new Error("Invalid JSON format");
      }

      const { data, error } = await supabase
        .from("footer_content")
        .update({ content: parsedContent })
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["footer"] });
      setEditingId(null);
      toast({
        title: "Success",
        description: "Footer content updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update footer content: " + error.message,
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
      <h2 className="text-2xl font-bold">Footer Content</h2>
      <p className="text-muted-foreground">
        Edit the footer content sections below. Content must be in valid JSON
        format.
      </p>

      <div className="grid gap-4">
        {footerContent?.map((section) => (
          <Card key={section.id}>
            <CardContent className="pt-6">
              {editingId === section.id ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateMutation.mutate({
                      id: section.id,
                      content: formData.content,
                    });
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-sm font-medium">
                      Content (JSON format)
                    </label>
                    <Textarea
                      value={formData.content}
                      onChange={(e) =>
                        setFormData({ content: e.target.value })
                      }
                      placeholder="Enter JSON content"
                      className="font-mono"
                      rows={10}
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
                      <h3 className="text-lg font-semibold">
                        {section.section_name}
                      </h3>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        setEditingId(section.id);
                        setFormData({
                          content: JSON.stringify(section.content, null, 2),
                        });
                      }}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </div>
                  <pre className="mt-4 p-4 bg-muted rounded-lg overflow-x-auto">
                    <code>{JSON.stringify(section.content, null, 2)}</code>
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};