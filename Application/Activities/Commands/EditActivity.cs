using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity
{
    public class Command : IRequest
    {
        public required Activity Activity { get; set; }
    }

    public class Handler(AppDbContext appDbContext,IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await appDbContext.Activities.FindAsync([request.Activity.Id], cancellationToken);

            if (activity == null)
            {
                throw new Exception("Activity not found");
            }

            mapper.Map(request.Activity, activity);

            await appDbContext.SaveChangesAsync(cancellationToken);
        }
    }
}
