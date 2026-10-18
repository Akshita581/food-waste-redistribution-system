// Mock Database Data to simulate what Arunesh's MySQL would return
const mockDonationsInDB = [
  { id: 101, foodType: 'Surplus Rice', quantity: '10 kg', area: 'Sector-62', status: 'AVAILABLE' },
  { id: 102, foodType: 'Buns & Pastries', quantity: '5 kg', area: 'Sector-62', status: 'AVAILABLE' },
  { id: 103, foodType: 'Fresh Apples', quantity: '8 kg', area: 'Sector-15', status: 'AVAILABLE' },
  { id: 104, foodType: 'Cooked Curry', quantity: '12 kg', area: 'Sector-62', status: 'AVAILABLE' }
];

export const getConsolidatedRoutes = async (req, res) => {
  try {
    const { targetArea } = req.query; // Volunteer passes their current/preferred sector area

    if (!targetArea) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide a targetArea query parameter (e.g., ?targetArea=Sector-62).'
      });
    }

    // 1. Intelligent Filtering Logic: Extract active listings for that specific region
    const areaMatches = mockDonationsInDB.filter(
      (donation) => donation.area === targetArea && donation.status === 'AVAILABLE'
    );

    if (areaMatches.length === 0) {
      return res.status(200).json({
        status: 'success',
        message: `No active donations found to consolidate in ${targetArea} right now.`,
        data: []
      });
    }

    // 2. Batch Consolidation Packaging
    // Instead of assigning multiple single jobs, we package them into an optimized multi-pickup single trip manifest.
    const consolidatedManifest = {
      manifestId: `BATCH-${Date.now()}`,
      optimizedArea: targetArea,
      totalStopCount: areaMatches.length,
      assignedVolunteerId: req.user?.id || 'VOL-77',
      // Map out the stop itinerary array
      pickupItinerary: areaMatches.map((item, index) => ({
        stopNumber: index + 1,
        donationId: item.id,
        itemDescription: item.foodType,
        payloadWeight: item.quantity,
        status: 'PENDING_PICKUP'
      }))
    };

    // Send the consolidated routing log back to the volunteer app interface
    res.status(200).json({
      status: 'success',
      message: `Successfully clustered ${areaMatches.length} independent donations into a single optimized volunteer route.`,
      data: consolidatedManifest
    });

  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to process optimized cluster routes.'
    });
  }
};
