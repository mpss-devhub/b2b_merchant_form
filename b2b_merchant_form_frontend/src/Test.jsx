import "./App.css";
import { InputText } from "./components/atoms/InputText";
import { Label } from "./components/atoms/Label";

function Test() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-10">
                    <h3 className="text-3xl font-extrabold text-gray-800">
                        Merchant Application
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">
                        Please provide all required business details
                    </p>
                </header>

                <Section title="Business Overview">
                    <FormRow />
                </Section>

                <Section title="Additional Details">
                    <AdvancedFields />
                </Section>
            </div>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-10 border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">
                {title}
            </h4>
            {children}
        </div>
    );
}

function FormRow() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField label="Business Name" placeholder="Enter business name" />
            <FormField label="Business Type" placeholder="Enter business type" />
            <FormField label="Business Address" placeholder="Enter business address" />
            <FormField label="Contact Person" placeholder="Enter contact person" />
            <FormField label="Phone Number" placeholder="Enter phone number" />
            <FormField label="Email Address" placeholder="Enter email address" />
        </div>
    );
}

function AdvancedFields() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Textarea */}
            <div className="flex flex-col">
                <Label className="mb-2 text-sm text-gray-700 font-medium">
                    Business Description
                </Label>
                <textarea
                    placeholder="Describe your business..."
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={4}
                />
            </div>

            {/* Select */}
            <div className="flex flex-col">
                <Label className="mb-2 text-sm text-gray-700 font-medium">
                    Business Category
                </Label>
                <select className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select category</option>
                    <option value="retail">Retail</option>
                    <option value="services">Services</option>
                    <option value="food">Food & Beverage</option>
                    <option value="education">Education</option>
                </select>
            </div>

            {/* Radio buttons */}
            <div className="flex flex-col">
                <Label className="mb-2 text-sm text-gray-700 font-medium">
                    Business Size
                </Label>
                <div className="flex gap-6">
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="size" value="small" className="accent-blue-600" />
                        <span className="text-gray-700 text-sm">Small</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="size" value="medium" className="accent-blue-600" />
                        <span className="text-gray-700 text-sm">Medium</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="size" value="large" className="accent-blue-600" />
                        <span className="text-gray-700 text-sm">Large</span>
                    </label>
                </div>
            </div>

            {/* Checkbox */}
            <div className="flex flex-col">
                <Label className="mb-2 text-sm text-gray-700 font-medium">
                    Payment Methods Accepted
                </Label>
                <div className="flex flex-col space-y-2">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="accent-blue-600" />
                        <span className="text-gray-700 text-sm">Cash</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="accent-blue-600" />
                        <span className="text-gray-700 text-sm">Credit Card</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="accent-blue-600" />
                        <span className="text-gray-700 text-sm">Mobile Wallet</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

function FormField({ label, placeholder }) {
    return (
        <div className="flex flex-col">
            <Label className="mb-2 text-sm text-gray-700 font-medium">
                {label}
            </Label>
            <InputText placeholder={placeholder} />
        </div>
    );
}

export default Test;
