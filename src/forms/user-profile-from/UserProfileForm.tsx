import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const fromSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(3, "name is requird"),
    addressLine1: z.string().min(3, "addressLine1 is requird"),
    city: z.string().min(2, "city is requird"),
    country: z.string().min(3, "country is requird"),
});

type UserFormData = z.infer<typeof fromSchema>;

type Props = {
    currentUser: User
    onSave: (UserFormData: UserFormData) => void;
    isloading: boolean;
}
const UserProfileForm = ({ onSave, isloading,  currentUser}: Props) => {

    const form = useForm<UserFormData>({
        resolver: zodResolver(fromSchema),
        defaultValues: currentUser,
    });

    useEffect(() => {
        form.reset(currentUser);
    }, [currentUser, form]);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSave)} className="space-y-4 p-5 bg-gray-50 rounded-lg md:p-10">
                <div>
                    <h2 className="text-2xl font-bold"> User Profile Form</h2>
                    <FormDescription>
                        View and change profile information here
                    </FormDescription>
                </div>
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Eamil</FormLabel>
                        <FormControl>
                            <Input {...field} disabled className="bg-white" />
                        </FormControl>
                    </FormItem>
                )} />
                <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <div className="flex flex-col md:flex-row  gap-4">
                    <FormField control={form.control} name="addressLine1" render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel>Addres Line 1</FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="city" render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="country" render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>
                {isloading ? <LoadingButton /> : <Button type="submit" className="bg-orange-500">Submit</Button>}
            </form>
        </Form>
    )
}



export default UserProfileForm;