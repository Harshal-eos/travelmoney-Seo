
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { toast } from "sonner";
import { Store } from "lucide-react";
import { supabase } from "@/app/integration/supabase/supabaseClient";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  storeUrl: z.string().url({
    message: "Please enter a valid store URL (e.g., https://yourstore.com).",
  }),
});

type MerchantFormValues = z.infer<typeof formSchema>;

interface MerchantApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MerchantApplicationForm = ({
  open,
  onOpenChange,
}: MerchantApplicationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<MerchantFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      storeUrl: "",
    },
  });

  async function onSubmit(values: MerchantFormValues) {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('merchant_applications')
        .insert([
          { 
            name: values.name,
            email: values.email,
            store_url: values.storeUrl
          }
        ]);
      
      if (error) {
        console.error("Error submitting application:", error);
        
        // Handle duplicate email error
        if (error.code === '23505') {
          setSubmitError("An application with this email already exists.");
          setIsSubmitting(false);
          return;
        }
        
        // Handle other errors
        setSubmitError("There was an error submitting your application. Please try again.");
        setIsSubmitting(false);
        return;
      }
      
      // Success
      setIsSubmitting(false);
      onOpenChange(false);
      form.reset();
      
      toast.success("Application submitted", {
        description: "We'll be in touch with you shortly!",
      });
    } catch (error) {
      console.error("Unexpected error:", error);
      setSubmitError("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold flex items-center gap-2">
            <Store className="h-5 w-5 text-travel-blue" />
            Merchant Partner Application
          </DialogTitle>
          <DialogDescription>
            Complete the form below to join TravelMoney&apos;s merchant partner network.
            We&apos;ll reach out to discuss the next steps.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="you@company.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="storeUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://your-store.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {submitError && (
              <div className="text-destructive text-sm font-medium">{submitError}</div>
            )}
            
            <div className="flex justify-end gap-3">
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-travel-blue hover:bg-travel-blue-dark text-white"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default MerchantApplicationForm;
