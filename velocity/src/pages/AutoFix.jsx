import React from 'react';
import Layout from '../components/Layout';

const AutoFix = () => {
  // Mock PR data
  const pullRequest = {
    id: 'PR-4521',
    title: 'Optimize GPU data pipeline with RAPIDS acceleration',
    issueId: 'ISS-2847',
    status: 'Merged',
    author: 'VELOCITY AutoFix Bot',
    createdAt: '2026-01-09T08:15:00Z',
    mergedAt: '2026-01-09T10:42:00Z',
    deployedAt: '2026-01-09T11:05:00Z',
    branch: 'autofix/gpu-starvation-2847',
    repository: 'ml-training-pipeline-prod',
  };

  // Status progression
  const statusSteps = [
    { label: 'Generated', completed: true, timestamp: pullRequest.createdAt },
    { label: 'Reviewed', completed: true, timestamp: '2026-01-09T09:30:00Z' },
    { label: 'Merged', completed: true, timestamp: pullRequest.mergedAt },
    { label: 'Deployed', completed: true, timestamp: pullRequest.deployedAt },
  ];

  // Before vs After comparison
  const comparison = {
    before: {
      pipelineThroughput: '1.2 GB/s',
      batchWaitTime: '450ms',
      gpuIdle: '67.4%',
      trainingTime: '8.5 hours',
      costPerRun: '$142',
      library: 'pandas 1.3.5',
    },
    after: {
      pipelineThroughput: '8.7 GB/s',
      batchWaitTime: '28ms',
      gpuIdle: '11.2%',
      trainingTime: '2.6 hours',
      costPerRun: '$46',
      library: 'cuDF 24.02 + RAPIDS',
    },
  };

  // Performance improvements
  const improvements = [
    {
      metric: 'GPU Utilization',
      before: '32.6%',
      after: '88.8%',
      improvement: '+56.2%',
      icon: '⚡',
      color: 'blue',
    },
    {
      metric: 'Training Speed',
      before: '8.5 hrs',
      after: '2.6 hrs',
      improvement: '3.3x faster',
      icon: '🚀',
      color: 'purple',
    },
    {
      metric: 'Cost per Run',
      before: '$142',
      after: '$46',
      improvement: '-$96 (68%)',
      icon: '💰',
      color: 'green',
    },
    {
      metric: 'Monthly Savings',
      before: '$42,600',
      after: '$13,800',
      improvement: '-$28,800',
      icon: '📊',
      color: 'green',
    },
  ];

  // Code changes summary (visual only, no real code)
  const changes = [
    {
      file: 'data_pipeline.py',
      type: 'Modified',
      changes: '+47 -23',
      description: 'Replaced pandas operations with GPU-accelerated cuDF',
    },
    {
      file: 'requirements.txt',
      type: 'Modified',
      changes: '+3 -1',
      description: 'Added RAPIDS libraries for GPU acceleration',
    },
    {
      file: 'config.yaml',
      type: 'Modified',
      changes: '+5 -2',
      description: 'Enabled async data loading and batch prefetch',
    },
  ];

  const getStatusColor = (completed) => {
    return completed ? 'bg-green-500' : 'bg-gray-300';
  };

  const getStatusIcon = (status) => {
    if (status === 'Generated') return '📝';
    if (status === 'Merged') return '✓';
    if (status === 'Deployed') return '🚀';
    return '✓';
  };

  return (
    <Layout pageTitle="Auto-Fix Details" pageStatus="Deployed">
      <div className="space-y-6">
        {/* PR Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl sm:text-3xl">{getStatusIcon(pullRequest.status)}</span>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{pullRequest.title}</h2>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold border border-green-200">
                    {pullRequest.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Pull Request: <span className="font-mono font-semibold text-blue-600">{pullRequest.id}</span> • 
                  Fixes Issue: <span className="font-mono font-semibold text-red-600 ml-1">{pullRequest.issueId}</span>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Repository: <span className="font-mono">{pullRequest.repository}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Status Timeline */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-bold text-gray-700 mb-4">Deployment Status</h3>
            <div className="flex items-center justify-between overflow-x-auto pb-2">
              {statusSteps.map((step, index) => (
                <div key={index} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full ${getStatusColor(step.completed)} flex items-center justify-center`}>
                      {step.completed ? (
                        <span className="text-white font-bold">✓</span>
                      ) : (
                        <span className="text-gray-500 font-bold">{index + 1}</span>
                      )}
                    </div>
                    <p className={`text-xs font-medium mt-2 ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                      {step.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {step.completed && new Date(step.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {index < statusSteps.length - 1 && (
                    <div className={`flex-1 h-1 mx-2 ${step.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Before vs After Comparison */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Before vs After</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Before Card */}
            <div className="bg-red-50 rounded-lg border-2 border-red-200 p-4 sm:p-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl sm:text-2xl">❌</span>
                <h4 className="text-base sm:text-lg font-bold text-red-900">Before Fix</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <p className="text-xs text-gray-600">Pipeline Throughput</p>
                  <p className="text-lg font-bold text-red-700">{comparison.before.pipelineThroughput}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <p className="text-xs text-gray-600">Batch Wait Time</p>
                  <p className="text-lg font-bold text-red-700">{comparison.before.batchWaitTime}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <p className="text-xs text-gray-600">GPU Idle Time</p>
                  <p className="text-lg font-bold text-red-700">{comparison.before.gpuIdle}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <p className="text-xs text-gray-600">Training Time</p>
                  <p className="text-lg font-bold text-red-700">{comparison.before.trainingTime}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <p className="text-xs text-gray-600">Cost per Run</p>
                  <p className="text-lg font-bold text-red-700">{comparison.before.costPerRun}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <p className="text-xs text-gray-600">Library Stack</p>
                  <p className="text-sm font-semibold text-red-700">{comparison.before.library}</p>
                </div>
              </div>
            </div>

            {/* After Card */}
            <div className="bg-green-50 rounded-lg border-2 border-green-200 p-4 sm:p-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl sm:text-2xl">✅</span>
                <h4 className="text-base sm:text-lg font-bold text-green-900">After Fix</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="text-xs text-gray-600">Pipeline Throughput</p>
                  <p className="text-lg font-bold text-green-700">{comparison.after.pipelineThroughput}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="text-xs text-gray-600">Batch Wait Time</p>
                  <p className="text-lg font-bold text-green-700">{comparison.after.batchWaitTime}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="text-xs text-gray-600">GPU Idle Time</p>
                  <p className="text-lg font-bold text-green-700">{comparison.after.gpuIdle}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="text-xs text-gray-600">Training Time</p>
                  <p className="text-lg font-bold text-green-700">{comparison.after.trainingTime}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="text-xs text-gray-600">Cost per Run</p>
                  <p className="text-lg font-bold text-green-700">{comparison.after.costPerRun}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="text-xs text-gray-600">Library Stack</p>
                  <p className="text-sm font-semibold text-green-700">{comparison.after.library}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Improvements */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Performance & Cost Improvements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {improvements.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    item.color === 'green' ? 'bg-green-100 text-green-700' :
                    item.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {item.improvement}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">{item.metric}</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Before:</span>
                    <span className="font-semibold text-red-600">{item.before}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">After:</span>
                    <span className="font-semibold text-green-600">{item.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Changes Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">Code Changes Summary</h3>
          <div className="space-y-3">
            {changes.map((change, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className={`px-3 py-1 rounded text-xs font-semibold ${
                  change.type === 'Modified' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                }`}>
                  {change.type}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <p className="font-mono text-sm font-semibold text-gray-900">{change.file}</p>
                    <span className="text-xs font-mono text-gray-500">{change.changes}</span>
                  </div>
                  <p className="text-sm text-gray-600">{change.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-4 sm:p-6">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="text-2xl sm:text-3xl">🎉</span>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-gray-900">Fix Successfully Deployed</h4>
              <p className="text-xs sm:text-sm text-gray-600">System is now operating at optimal efficiency</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full lg:w-auto">
            <button className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors">
              View PR on GitHub
            </button>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AutoFix;
