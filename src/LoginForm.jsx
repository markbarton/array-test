import { useState } from 'react'

function LoginForm({ index, firstName, lastName, onChangeHandler }) {

    return (
        <div className="p-3 pb-4 mb-4 bg-blue-100 border border-gray-300 rounded-lg ">
            <div className="flex justify-between">
                <h2 className="text-base font-semibold leading-7 text-gray-900 ">Personal Information </h2>
                <div className="p-2 mt-2 text-lg font-bold bg-purple-200 border rounded-md text-purple-950 border-purple-950">{firstName} {lastName}</div>
            </div>

            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

            <div className="grid grid-cols-1 mt-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            onChange={(event) => onChangeHandler(index, event)}
                            type="text"
                            name="firstName"
                            value={firstName}
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            onChange={(event) => onChangeHandler(index, event)}
                            type="text"
                            name="lastName"
                            value={lastName}
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>



            </div>

        </div>

    )
}

export default LoginForm

