"use client";

import { useState } from "react";
import { LuDollarSign, LuUsers, LuActivity, LuPlus } from "react-icons/lu";
import { MetricCard, OverviewChart, TaskFeed } from "@/components/backend/dashboard";
import { Button, Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from "@/components/backend/ui";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            System Overview
          </h1>
          <p className="text-white/40 text-sm mt-1">Monitor operational vitals and platform state.</p>
        </div>

        {/* Integrating Premium Button to launch Modal */}
        <Button variant="premium" className="gap-2" onClick={() => setShowModal(true)}>
          <LuPlus size={16} />
          New Insight
        </Button>
      </div>

      {/* Premium Interactive Modal Demo */}
      <Modal open={showModal} onOpenChange={setShowModal}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Generate System Report</ModalTitle>
            <ModalDescription>
              Are you sure you want to initialize deep system diagnostics? This process consumes 1.2GB bandwidth.
            </ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="premium" onClick={() => setShowModal(false)}>Execute Now</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      {/* STATS SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <MetricCard
          title="Total Revenue"
          value="$42,394"
          description="+12.5% increase"
          isTrendUp={true}
          icon={LuDollarSign}
        />
        <MetricCard
          title="Active Users"
          value="8,234"
          description="+4.2% growth"
          isTrendUp={true}
          icon={LuUsers}
        />
        <MetricCard
          title="Loss Rate"
          value="3.42%"
          description="-0.8% drop"
          isTrendUp={false}
          icon={LuActivity}
        />
      </section>


      {/* WIDGETS SECTION - Individual Component Modules */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <OverviewChart />
        <TaskFeed />
      </section>
    </div>
  );
}
