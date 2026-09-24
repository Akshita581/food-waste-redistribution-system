import React, { createContext, useContext, useState, useEffect } from 'react'

const LOCAL_STORAGE_KEY = 'foodbridge_volunteer_assignments'

export const INITIAL_ASSIGNMENTS = [
    {
        id: 1,
        food: 'Cooked Meals',
        category: 'Cooked Food',
        quantity: '20 Meals',
        donor: 'Campus Cafeteria',
        pickupLocation: 'GLA University, Mathura',
        pickupDate: '24 Sep 2026',
        pickupTime: '5:00 PM',
        deliveryLocation: 'Mathura Community Center',
        deliveryDate: '24 Sep 2026',
        deliveryTime: '6:00 PM',
        status: 'Assigned',
        notes: 'Collect freshly prepared meals and deliver them carefully to the community center.',
        icon: '🍛'
    },
    {
        id: 2,
        food: 'Rice',
        category: 'Rice & Grains',
        quantity: '15 Kg',
        donor: 'Local Restaurant',
        pickupLocation: 'Mathura City',
        pickupDate: '25 Sep 2026',
        pickupTime: '4:00 PM',
        deliveryLocation: 'Helping Hands NGO',
        deliveryDate: '25 Sep 2026',
        deliveryTime: '5:00 PM',
        status: 'Pickup Completed',
        notes: 'Rice has already been packed for transportation.',
        icon: '🌾'
    },
    {
        id: 3,
        food: 'Fresh Fruits',
        category: 'Fruits & Vegetables',
        quantity: '10 Kg',
        donor: 'Fresh Mart',
        pickupLocation: 'Mathura Market',
        pickupDate: '26 Sep 2026',
        pickupTime: '3:00 PM',
        deliveryLocation: 'Community Shelter',
        deliveryDate: '26 Sep 2026',
        deliveryTime: '4:00 PM',
        status: 'In Delivery',
        notes: 'Handle the fruit boxes carefully during transportation.',
        icon: '🍎'
    },
    {
        id: 4,
        food: 'Bread',
        category: 'Bread & Bakery',
        quantity: '30 Packets',
        donor: 'Sunrise Bakery',
        pickupLocation: 'Mathura Bakery',
        pickupDate: '23 Sep 2026',
        pickupTime: '6:00 PM',
        deliveryLocation: 'Helping Hands NGO',
        deliveryDate: '23 Sep 2026',
        deliveryTime: '7:00 PM',
        status: 'Completed',
        notes: 'Bread packets delivered successfully.',
        icon: '🍞'
    },
    {
        id: 5,
        food: 'Vegetable Curry',
        category: 'Cooked Food',
        quantity: '12 Kg',
        donor: 'City Restaurant',
        pickupLocation: 'Mathura City',
        pickupDate: '27 Sep 2026',
        pickupTime: '5:30 PM',
        deliveryLocation: 'Community Shelter',
        deliveryDate: '27 Sep 2026',
        deliveryTime: '6:30 PM',
        status: 'Assigned',
        notes: 'Keep food containers upright during transportation.',
        icon: '🍲'
    },
    {
        id: 6,
        food: 'Packaged Snacks',
        category: 'Packaged Food',
        quantity: '50 Packets',
        donor: 'Local Event Organizer',
        pickupLocation: 'Mathura Event Hall',
        pickupDate: '28 Sep 2026',
        pickupTime: '2:00 PM',
        deliveryLocation: 'Community Center',
        deliveryDate: '28 Sep 2026',
        deliveryTime: '3:00 PM',
        status: 'Completed',
        notes: 'Deliver all packets to the community center.',
        icon: '📦'
    }
]

const VolunteerContext = createContext()

export function VolunteerProvider({ children }) {
    const [assignments, setAssignments] = useState(() => {
        try {
            const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
            if (saved) {
                const parsed = JSON.parse(saved)
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed
                }
            }
        } catch (e) {
            console.error('Error reading volunteer assignments from localStorage:', e)
        }
        return INITIAL_ASSIGNMENTS
    })

    // Synchronize to localStorage whenever assignments change
    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(assignments))
        } catch (e) {
            console.error('Error saving volunteer assignments to localStorage:', e)
        }
    }, [assignments])

    // Update status for a specific assignment ID
    const updateAssignmentStatus = (assignmentId, newStatus) => {
        setAssignments((prevAssignments) =>
            prevAssignments.map((assignment) => {
                if (String(assignment.id) === String(assignmentId)) {
                    return { ...assignment, status: newStatus }
                }
                return assignment
            })
        )
    }

    // Reset helper for development / testing
    const resetAssignments = () => {
        setAssignments(INITIAL_ASSIGNMENTS)
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_ASSIGNMENTS))
        } catch (e) {
            console.error('Error resetting volunteer assignments in localStorage:', e)
        }
    }

    return (
        <VolunteerContext.Provider
            value={{
                assignments,
                updateAssignmentStatus,
                resetAssignments
            }}
        >
            {children}
        </VolunteerContext.Provider>
    )
}

export function useVolunteer() {
    const context = useContext(VolunteerContext)
    if (!context) {
        throw new Error('useVolunteer must be used within a VolunteerProvider')
    }
    return context
}
