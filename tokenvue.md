<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://wjcuydizmrzhhegugsfn.supabase.co/storage/v1/object/public/TokenVue/logocomplete-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://wjcuydizmrzhhegugsfn.supabase.co/storage/v1/object/public/TokenVue/logocomplete-light.png">
    <img alt="TokenVue" src="https://wjcuydizmrzhhegugsfn.supabase.co/storage/v1/object/public/TokenVue/logocomplete-light.png" width="360">
  </picture>
</p>

# TokenVue

**TokenVue is an AI gateway control plane for securely managing LLM access, virtual keys, guardrails, routing, usage visibility, and workspace operations.**

TokenVue sits between your applications and AI providers such as OpenAI, Anthropic, Google Gemini, DeepSeek, OpenRouter, Mistral, Cohere, and OpenAI-compatible self-hosted models. It gives teams one place to control how LLM traffic is authenticated, routed, protected, monitored, and reviewed.

## Why TokenVue

Modern AI products often depend on multiple providers, model families, environments, budgets, and reliability requirements. Without a gateway layer, teams usually spread provider keys, limits, failover logic, monitoring, and policy enforcement across application code and operations runbooks.

TokenVue centralizes those controls so teams can:

- Keep provider API keys out of application code.
- Issue application-facing virtual keys per service, team, or workload.
- Route traffic across providers and fallback paths without changing app code.
- Apply guardrails before requests reach external models.
- Monitor token usage, latency, failures, estimated spend, and guardrail blocks.
- Review suspicious, blocked, failed, or policy-triggered traffic.
- Organize access by workspace, environment, region, role, and owner.

## Core Platform

| Area | What TokenVue Provides |
| --- | --- |
| Virtual Keys | Application-facing gateway keys that route traffic through TokenVue instead of exposing provider credentials. |
| LLM Config | Provider-facing setup for API keys, base URLs, model names, budget modes, limits, and connection testing. |
| Auto Router | Routing policies, fallback chains, retries, and circuit breaker settings for provider and model failover. |
| Guardrails | Budget caps, PII scrubbing, toxicity filtering, prompt injection detection, and keyword blocking. |
| Insights | Request volume, token usage, estimated spend, P95 latency, provider performance, model activity, and service hotspots. |
| Logs | Request-level gateway activity, token counts, provider latency, status codes, endpoints, and cost details. |
| Breaches | Grouped review of blocked, failed, suspicious, quota-related, or policy-triggered virtual key activity. |
| Workspaces | Boundaries for teams, environments, budgets, virtual keys, routing context, members, regions, and logs. |
| User Management | Workspace roles, invitations, access assignment, pending invites, password resets, and access review workflows. |
| Billing Visibility | Current plan status, token usage visibility, subscription state, payment method state, and billing history. |
| Token Calculator | Model cost estimation from input tokens, output tokens, request volume, context usage, and public model pricing. |

## Gateway Flow

```txt
Application
  -> TokenVue Virtual Key
  -> Guardrails and Limits
  -> Auto Router Policy
  -> LLM Config
  -> Provider Model
```

Applications call TokenVue through an OpenAI-compatible API layer. TokenVue validates the virtual key, applies configured protections, resolves routing policy, forwards the request to the selected provider, and records the resulting usage signals.

## OpenAI-Compatible API

Existing OpenAI SDK workflows can use TokenVue by changing the API key and base URL.

```ts
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.TOKENVUE_API_KEY,
  baseURL: "https://api.tokenvue.ai/v1",
});
```

Local development gateways may use:

```txt
http://localhost:3000/v1
```

Example request:

```bash
curl -X POST "https://your-tokenvue-domain.com/v1/chat/completions" \
  -H "Authorization: Bearer sk-tg-live-..." \
  -H "Content-Type: application/json" \
  -d '{
    "model": "configured-model",
    "messages": [
      {
        "role": "user",
        "content": "Hello from TokenVue"
      }
    ]
  }'
```

## Setup Path

1. Sign in to TokenVue.
2. Create or select a workspace.
3. Configure an LLM provider in LLM Config.
4. Create a virtual key for an application, service, or workload.
5. Connect your application using the TokenVue gateway base URL.
6. Enable workspace-level and key-level guardrails.
7. Review logs, breaches, and insights after traffic starts flowing.

## Routing and Reliability

Auto Router helps teams move traffic when conditions change. Routing policies can evaluate signals such as budget usage, token usage, latency thresholds, rate limits, quota exhaustion, provider errors, timeouts, regional requirements, capacity, security triggers, and provider health.

Auto Router supports:

- Primary provider and model selection.
- Ordered fallback chains.
- Retry policies for rate limits, server errors, timeouts, and unavailable providers.
- Circuit breaker settings for unhealthy routes.
- Router event visibility when traffic moves away from the primary route.

## Guardrails and Governance

TokenVue guardrails run before requests are sent to an LLM provider. They help teams control cost, reduce risk, protect sensitive data, and enforce workspace policy from a central place.

Supported guardrails include:

- Hard Budget Cap
- PII Scrubbing
- Toxicity Filter
- Injection Detection
- Keywords

Guardrails can be managed at the workspace level and applied across virtual keys.

## Observability

TokenVue records gateway activity so teams can understand how LLM traffic behaves in production.

Insights help track:

- Total requests
- Total tokens processed
- Estimated spend
- P95 latency
- Provider performance
- Model traffic share
- Service-level hotspots
- Guardrail block patterns
- Idle configured routes
- Public model pricing and context comparisons

Logs provide request-level troubleshooting details, including provider, model, endpoint, status code, input tokens, output tokens, throughput, latency, response timing, and provider errors.

## Audit and Incident Review

Breaches in TokenVue are grouped enforcement events that may need review. A breach does not always mean a confirmed compromise; it can represent failed requests, blocked prompts, guardrail triggers, paused-key usage, quota issues, or gateway-level enforcement.

TokenVue can classify breach groups by:

- Keywords
- Injection Detection
- PII Scrubbing
- Toxicity Filter
- Hard Budget Cap
- Key Status Control
- Gateway Enforcement

Each breach group can include severity, status, affected virtual key, owner, provider, model, trigger evidence, timeline, and recommended actions.

## Workspace and Team Management

Workspaces separate LLM operations by team, project, environment, business unit, region, budget, and ownership. Only one workspace is active at a time, and the active workspace controls the gateway data being viewed and managed.

TokenVue includes three default workspace roles:

| Role | Access | Typical Use |
| --- | --- | --- |
| Workspace Admin | Full access | Manage team access, workspace settings, and billing visibility. |
| Gateway Operator | Standard access | Manage virtual keys, guardrails, routing, and daily gateway reviews. |
| Security Auditor | Read only | Review logs, breaches, spend, and access history. |

## Cost Planning

The Token Calculator helps estimate model usage before routing production traffic. Teams can compare providers and models using input tokens, output tokens, request volume, public pricing, context window usage, per-request cost, batch cost, and projected 30-day cost.

Billing visibility currently reflects the Free Basic operating model:

- All platform features enabled.
- Unlimited token quota.
- No monthly charge.
- No overage.
- No payment card required.
- No generated billing history while paid billing is disabled.

## Built For

TokenVue is designed for:

- AI startups
- SaaS applications
- Enterprise AI platforms
- AI agents and copilots
- Internal AI infrastructure teams
- Hybrid AI deployments
- Teams running production LLM traffic across multiple providers

## Documentation

- [What is TokenVue?](docs/intro.mdx)
- [Getting Started](docs/getting-started.mdx)
- [LLM Config](docs/tokenvue/llm-config.mdx)
- [Virtual Keys](docs/tokenvue/virtual-key.mdx)
- [Guardrails](docs/tokenvue/guardrail.mdx)
- [Auto Router](docs/tokenvue/auto-router.mdx)
- [Insights](docs/connect/insights.mdx)
- [Token Calculator](docs/connect/token-calculator.mdx)
- [Billing](docs/connect/billing.mdx)
- [Logs](docs/audit/logs.mdx)
- [Breaches](docs/audit/breaches.mdx)
- [Workspaces](docs/management/workspace.mdx)
- [User Management](docs/management/user-management.mdx)

## In Short

TokenVue is the control plane for production LLM traffic. It gives teams secure virtual keys, centralized provider configuration, policy-based routing, guardrails, usage analytics, audit visibility, workspace management, and cost planning in one gateway layer.
