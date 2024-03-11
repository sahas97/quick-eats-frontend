import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";

import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
    cuisine: string;
    field: ControllerRenderProps<FieldValues, "cuisines">
}

const CuisineCheckbox = ({ cuisine, field }: Props) => {
    return (
        <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
            <FormControl>
                <Checkbox className="bg-white" checked={field.value.includes(cuisine)}
                    onCheckedChange={(checked) => {
                        if (checked) {
                            // if current items is chekd means true add new valuve to cusine array ...field.value create new array of cusinse chekd and ,cuisine means add new value to the array 
                            field.onChange([...field.value, cuisine]);
                        }
                        else {
                            //if not checked remove cusine from the array
                            field.onChange(
                                field.value.filter((value: string) => value !== cuisine)
                            );
                        }
                    }}
                />
            </FormControl>
            <FormLabel className="text-sm font-normal">
                {cuisine}
            </FormLabel>
        </FormItem>
    )
}


export default CuisineCheckbox