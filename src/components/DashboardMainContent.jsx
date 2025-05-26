import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

function DashboardMainContent() {
  return (
    <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <section className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <ActivityFeed />
      </section>
      <section className="space-y-6">
        <CalendarView />
        <UpcomingSchedule />
      </section>
    </main>
  );
}

export default DashboardMainContent;
